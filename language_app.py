# language_app.py
import tkinter as tk
from tkinter import ttk
import random
from data import xhosa_data, spanish_data

class FlashCardApp:
    # --- Initialization and Setup ---
    def __init__(self, root):
        self.root = root
        self.root.title("FlashCard App")
        self.root.geometry("700x550")
        self.root.configure(bg="#F5F6F5")
        self.root.attributes("-topmost", False)

        # Core variables
        self.current_lang = "Xhosa"
        self.data = xhosa_data
        self.score = 0
        self.total_questions = 0
        self.words_left = []
        self.correct_answer_idx = None

        # Window centering
        self.center_window(700, 550)
        self.root.bind("<Configure>", self.on_resize)

        # --- Canvas Setup ---
        self.canvas = tk.Canvas(root, bg="#F5F6F5", highlightthickness=0)
        self.canvas.pack(fill="both", expand=True)

        # --- Styling ---
        self.style = ttk.Style()
        self.style.theme_use("clam")
        self.style.configure("TButton", font=("Avenir", 12), padding=5, background="#D9E4DD", foreground="#333333", borderwidth=0)
        self.style.map("TButton", background=[("active", "#C1D4C8")])
        self.style.configure("TCombobox", font=("Avenir", 12), padding=5)

        # --- UI Elements ---
        self.heading = self.canvas.create_text(350, 40, text="FlashCard App", font=("Avenir", 24, "bold"), fill="#4A4E69")
        self.subheading = self.canvas.create_text(350, 70, text=f"You are playing with {self.current_lang} flashcards", font=("Avenir", 14), fill="#4A4E69")

        self.switch_btn = ttk.Button(root, text="Switch to Spanish", command=self.switch_language, style="TButton")
        self.switch_btn_win = self.canvas.create_window(250, 110, window=self.switch_btn, width=150)

        self.info_btn = ttk.Button(root, text="Info", command=self.show_info, style="TButton")
        self.info_btn_win = self.canvas.create_window(400, 110, window=self.info_btn, width=100)

        self.pron_btn = ttk.Button(root, text="Pronunciation", command=self.show_pronunciation, style="TButton")
        self.pron_btn_win = self.canvas.create_window(550, 110, window=self.pron_btn, width=150)

        self.score_label = tk.Label(root, text=f"Score: {self.score}/{self.total_questions}", font=("Avenir", 14), bg="#F5F6F5", fg="#4A4E69")
        self.score_label_win = self.canvas.create_window(350, 150, window=self.score_label)

        self.category_var = tk.StringVar(value="Mix All")
        categories = ["Mix All"] + list(xhosa_data.keys())
        self.category_menu = ttk.Combobox(root, textvariable=self.category_var, values=categories, style="TCombobox", state="readonly")
        self.category_menu.bind("<<ComboboxSelected>>", lambda event: self.reset_round())
        self.category_menu_win = self.canvas.create_window(350, 190, window=self.category_menu, width=200)

        self.mode_var = tk.StringVar(value="English to Target")
        self.mode_menu = ttk.Combobox(root, textvariable=self.mode_var, values=["English to Target", "Target to English"], style="TCombobox", state="readonly")
        self.mode_menu.bind("<<ComboboxSelected>>", self.reset_round)
        self.mode_menu_win = self.canvas.create_window(350, 230, window=self.mode_menu, width=200)

        self.reset_btn = ttk.Button(root, text="Reset Round", command=self.reset_round, style="TButton")
        self.reset_btn_win = self.canvas.create_window(350, 275, window=self.reset_btn, width=100)

        self.question_card = self.canvas.create_rectangle(150, 320, 550, 390, fill="#FFFFFF", outline="#D9E4DD", width=2, tags="question")
        self.question_text = self.canvas.create_text(350, 355, text="", font=("Avenir", 16), fill="#333333")

        self.answer_buttons = []
        self.answer_texts = []
        for i in range(4):
            y_pos = 420 + i * 45
            btn_rect = self.canvas.create_rectangle(150, y_pos, 550, y_pos + 35, fill="#D9E4DD", outline="#D9E4DD", tags=f"btn{i}")
            btn_text = self.canvas.create_text(350, y_pos + 17.5, text="", font=("Avenir", 12), fill="#333333", tags=f"txt{i}")
            self.canvas.tag_bind(f"btn{i}", "<Button-1>", lambda e, idx=i: self.check_answer(idx))
            self.canvas.tag_bind(f"txt{i}", "<Button-1>", lambda e, idx=i: self.check_answer(idx))
            self.answer_buttons.append(btn_rect)
            self.answer_texts.append(btn_text)

        # Load initial "Mix All" questions
        self.get_words()
        self.next_question()

    # --- Window Management ---
    def center_window(self, width, height):
        x = (self.root.winfo_screenwidth() // 2) - (width // 2)
        y = (self.root.winfo_screenheight() // 2) - (height // 2)
        self.root.geometry(f"{width}x{height}+{x}+{y}")

    def on_resize(self, event):
        width = self.root.winfo_width()
        center_x = width // 2
        self.canvas.coords(self.heading, center_x, 40)
        self.canvas.coords(self.subheading, center_x, 70)
        self.canvas.coords(self.switch_btn_win, center_x - 150, 110)
        self.canvas.coords(self.info_btn_win, center_x, 110)
        self.canvas.coords(self.pron_btn_win, center_x + 150, 110)
        self.canvas.coords(self.reset_btn_win, center_x, 275)
        self.canvas.coords(self.score_label_win, center_x, 150)
        self.canvas.coords(self.category_menu_win, center_x, 190)
        self.canvas.coords(self.mode_menu_win, center_x, 230)
        self.canvas.coords(self.question_card, center_x - 200, 320, center_x + 200, 390)
        self.canvas.coords(self.question_text, center_x, 355)
        for i, (btn, txt) in enumerate(zip(self.answer_buttons, self.answer_texts)):
            y_pos = 420 + i * 45
            self.canvas.coords(btn, center_x - 200, y_pos, center_x + 200, y_pos + 35)
            self.canvas.coords(txt, center_x, y_pos + 17.5)

    # --- Language and Round Management ---
    def switch_language(self):
        if self.current_lang == "Xhosa":
            self.current_lang = "Spanish"
            self.data = spanish_data
            self.switch_btn.config(text="Switch to Xhosa")
        else:
            self.current_lang = "Xhosa"
            self.data = xhosa_data
            self.switch_btn.config(text="Switch to Spanish")
        self.canvas.itemconfig(self.subheading, text=f"You are playing with {self.current_lang} flashcards")
        self.reset_round()

    def reset_round(self, *args):  # Handle event argument from bind
        self.score = 0
        self.total_questions = 0
        self.words_left = self.get_words()  # Reload words for current category
        self.next_question()

    # --- Info and Pronunciation Popups ---
    def show_info(self):
        info_window = tk.Toplevel(self.root)
        info_window.title("How to Use FlashCard App")
        info_window.geometry("400x300")
        info_window.configure(bg="#F5F6F5")
        info_text = (
            "Welcome to FlashCard App!\n\n"
            "How to Use:\n"
            "1. Choose a language (Xhosa or Spanish) with the 'Switch' button.\n"
            "2. Select a category (e.g., Pronouns, Sentences) or 'Mix All'.\n"
            "3. Pick a mode: 'English to Target' or 'Target to English'.\n"
            "4. Read the word/sentence and click the correct answer.\n"
            "5. Score shows correct answers out of total attempts.\n"
            "6. Cards left (e.g., 3/10) tracks remaining items.\n"
            "7. 'Reset Round' restarts the score and card set.\n\n"
            "Goal: Learn daily words and sentences fast!"
        )
        tk.Label(info_window, text=info_text, font=("Avenir", 12), bg="#F5F6F5", fg="#333333", justify="left", wraplength=350).pack(pady=20)

    def show_pronunciation(self):
        pron_window = tk.Toplevel(self.root)
        pron_window.title("Pronunciation Guide")
        pron_window.geometry("500x600")
        pron_window.configure(bg="#F5F6F5")

        pron_text = (
            "Pronunciation Guide:\n\n"
            "Xhosa:\n"
            "<c> - click sound (like a 't' with tongue on palate)\n"
            "<x> - lateral click (side of tongue, like horse clop)\n"
            "<q> - deep click (back of tongue, sharp)\n"
            "<h> - breathy (aspirated, like 'ha')\n"
            "<ph> - puffed 'p' (not 'f')\n"
            "<th> - puffed 't' (not 'th' in 'the')\n"
            "<kh> - puffed 'k'\n"
            "<e> - 'eh' (as in 'bed')\n"
            "<o> - 'oh' (as in 'open')\n"
            "<u> - 'oo' (as in 'food')\n\n"
            "Spanish:\n"
            "<c> - 'k' before 'a/o/u' (e.g., 'casa'); 's' before 'e/i' (e.g., 'cielo')\n"
            "<z> - 's' (e.g., 'zapato')\n"
            "<j> - 'h' (like 'hat', e.g., 'jugar')\n"
            "<g> - 'g' before 'a/o/u' (e.g., 'gato'); 'h' before 'e/i' (e.g., 'gente')\n"
            "<r> - rolled 'r' (e.g., 'perro')\n"
            "<rr> - strongly rolled 'r' (e.g., 'carro')\n"
            "<ñ> - 'ny' (like 'canyon', e.g., 'niño')\n"
            "<ll> - 'y' (e.g., 'calle')\n"
            "<e> - 'eh' (as in 'bed')\n"
            "<o> - 'oh' (as in 'open')"
        )
        pron_text_widget = tk.Text(pron_window, font=("Avenir", 12), bg="#F5F6F5", fg="#333333", wrap="word", height=25, width=60)
        pron_text_widget.insert("1.0", pron_text)
        pron_text_widget.pack(pady=10)
        pron_text_widget.config(state="disabled")
        for char in ["c", "x", "q", "h", "ph", "th", "kh", "z", "j", "g", "r", "rr", "ñ", "ll", "e", "o", "u"]:
            start = pron_text.index(char)
            end = start + len(char)
            pron_text_widget.tag_add(char, f"1.0 + {start} chars", f"1.0 + {end} chars")
            pron_text_widget.tag_config(char, foreground="#FF8C61")

    # --- Game Logic ---
    def get_words(self):
        category = self.category_var.get()
        if category == "Mix All":
            all_words = {k: v for d in self.data.values() for k, v in d.items()}
        else:
            all_words = self.data[category]
        return list(all_words.items())

    def next_question(self):
        for btn in self.answer_buttons:
            self.canvas.itemconfig(btn, fill="#D9E4DD")
        if not self.words_left:  # Reload words if empty
            self.words_left = self.get_words()
        
        random.shuffle(self.words_left)
        self.current_word = self.words_left.pop()
        mode = self.mode_var.get()
        category = self.category_var.get()

        if mode == "English to Target":
            self.canvas.itemconfig(self.question_text, text=self.current_word[0], fill="#333333")
            correct_answer = self.current_word[1]
            options = [correct_answer] + [w[1] for w in random.sample(list(self.data[category].items()) if category != "Mix All" else list({k: v for d in self.data.values() for k, v in d.items()}.items()), 3)]
        else:
            self.canvas.itemconfig(self.question_text, text=self.current_word[1], fill="#333333")
            correct_answer = self.current_word[0]
            options = [correct_answer] + [w[0] for w in random.sample(list(self.data[category].items()) if category != "Mix All" else list({k: v for d in self.data.values() for k, v in d.items()}.items()), 3)]

        random.shuffle(options)
        for i, text_id in enumerate(self.answer_texts):
            self.canvas.itemconfig(text_id, text=options[i])
        self.correct_answer_idx = options.index(correct_answer)
        total_cards = len(self.data[category]) if category != "Mix All" else sum(len(d) for d in self.data.values())
        self.score_label.config(text=f"Score: {self.score}/{self.total_questions} ({len(self.words_left)}/{total_cards})")

    def check_answer(self, idx):
        self.total_questions += 1
        category = self.category_var.get()
        total_cards = len(self.data[category]) if category != "Mix All" else sum(len(d) for d in self.data.values())
        mode = self.mode_var.get()

        if idx == self.correct_answer_idx:
            self.score += 1
            self.canvas.itemconfig(self.question_text, text="Correct!", fill="#6ABF4B")
            self.root.after(1000, self.next_question)
        else:
            self.canvas.itemconfig(self.question_text, text="Incorrect!", fill="#FF8C61")
            self.canvas.itemconfig(self.answer_buttons[self.correct_answer_idx], fill="#6ABF4B")
            self.root.after(2000, self.next_question)
        self.score_label.config(text=f"Score: {self.score}/{self.total_questions} ({len(self.words_left)}/{total_cards})")

root = tk.Tk()
app = FlashCardApp(root)
root.mainloop()