#!/usr/bin/python3
"""function def pascal_triangle(n): that returns a list of lists
of integers representing the Pascal’s triangle of n:
Returns an empty list if n <= 0
You can assume n will be always an integer
You are not allowed to import any module"""


def pascal_triangle(n):
    """
    Represent Pascal's Triangle of size n.

    Returns a list of lists of integers representing the triangle.
    """

    if n <= 0:
        return []

    triangles = [[1]]
    while len(triangles) != n:
        tri = triangles[-1]
        tmp = [1]
        for i in range(len(tri) - 1):
            tmp.append(tri[i] + tri[i + 1])
        tmp.append(1)
        triangles.append(tmp)
    return triangles
