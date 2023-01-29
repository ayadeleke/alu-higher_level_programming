#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
if ((number % 10) >5)
{
        printf("last digit of %d is %d and is greater than 5\n",
                number, number % 10);
}
else if ((number % 10) < 6 && (number % 10) != 0)
{
        printf("Last digit of %d is %d and is less than 6 and not 0\n",
                number, number % 10);
}
else
{
        printf("Last digit of %d is %d and is 0\n",
                number, number % 10);
}

return (0);
