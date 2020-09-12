from tkinter import *
import requests
from tkinter import font
from tkinter import messagebox

backg = "#282828"
forg = "#c23a3a"
root = Tk()
root.title("DOWNLOADER...")
root.configure(bg="#012b73")
root.geometry("1230x570")
objfont = font.Font(family='Berlin Sans FB', size=18)


def download():
    url = start.urlval.get()
    if url == start.warn:
        messagebox.showwarning("WARNING", "please enter correct the URL")
        return
    try:
        data = requests.get(url)
        print(data)

        f = open(str(start.nameval.get()), "wb+")
        for i in data:
            f.write(i)
        f.close()
        messagebox.showinfo("success" , "DOWNLOADED...")
    except:
        messagebox.showerror("ERROR", "There Are some ERROR\n READ INFORMATION")


def info():
    msg = Tk()
    msg.title("information...")
    msg.geometry("600x200")
    msg.configure(bg="#012b73")
    message = "Hello user... \n1:check internet before use\n2:give file extention as per url pasted\n3:if wrong extantion give than file will not open correctly\n4:to download image file right click on it and copy the link\n5:.mp3,.pdf etc can be downloaded is url ends with that names"
    mslglab = Label(msg, text=message, bg="#012b73", fg=forg, font=objfont).grid(row= 0, column=0)

    author = Label(msg, text="THANK YOU\nJAY", bg="#012b73", fg=forg, font=objfont).grid(row=1, column=1)
    msg.mainloop()


def start():
    title = Label(root, text="DOWNLOADER", bg=backg, font=font.Font(family='Berlin Sans FB', size=22), fg=forg)
    title.grid(row=0, column=1, padx=200, pady=10)

    urllbl = Label(root, text="URL:", font=objfont, bg=backg, fg=forg)
    urllbl.grid(padx=50, pady=25, column=0, row=1)

    start.urlval = Entry(root, width=50, font=objfont, bg=backg, fg=forg)
    start.urlval.grid(row=1, column=1)
    start.warn = "enter url here..."
    start.urlval.insert(END, start.warn)

    namelbl = Label(root, text="FILENAME:", font=objfont, bg=backg, fg=forg)
    namelbl.grid(padx=50, pady=25, column=0, row=2)
    start.nameval = Entry(root, width=10, font=objfont, bg=backg, fg=forg)
    start.nameval.grid(row=2, column=1)

    submit = Button(root, text="SUBMIT", font=objfont, bg=backg, fg=forg, activebackground=forg, command=download)
    submit.grid(row=3, column=1)

    infom = Button(root, text="INFORMATION", font=objfont, bg=backg, fg=forg, activebackground=forg, command=info)
    infom.grid(row=4, column=1, pady=10)

    root.mainloop()


if __name__ == "__main__":
    start()