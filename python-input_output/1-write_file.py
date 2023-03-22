#!/usr/bin/python3
"""
Module 1-number_of_lines

Contains function that returns number of lines in text"""


def number_of_lines(filename="", text=""):
    """
    Writes the input text to a file with the specified filename in UTF-8 format, and returns the number of characters written.

    Parameters:
    filename (str): the name of the file to write to
    text (str): the text to write to the file

    Returns:
    int: the number of characters written to the file, or -1 if an error occurred
    """
    try:
        with open(filename, "w", encoding="utf8") as file:
            file.write(text)
            return len(text)
    except:
        return -1
