#!/usr/bin/python3
"""
Module 1-number_of_lines

Contains function that returns number of lines in text"""


def number_of_lines(filename=""):
    """Return the number of lines in a text file."""
    lines = 0
    with open(filename) as f:
        for line in f:
            lines += 1
    return lines
