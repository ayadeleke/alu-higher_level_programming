#!/usr/bin/env python3

"""
This module initializes a database table named `states` by linking a corresponding SQLAlchemy model class to the database.

Usage: python3 create_states_table.py <username> <password> <database_name>

The `create_engine` function is used to create a connection to the MySQL database. The connection string is formatted using the command-line arguments passed to the script.

The `Base.metadata.create_all` function creates all the tables that have been defined in the SQLAlchemy model. In this case, it creates a table for the `State` model in `model_state.py`.

Example usage:

    $ python3 create_states_table.py root password mydatabase

"""

import sys
from sqlalchemy import create_engine
from model_state import Base, State

if __name__ == "__main__":
    # Check if the correct number of command-line arguments were provided
    if len(sys.argv) != 4:
        print("Usage: python3 create_states_table.py <username> <password> <database_name>")
        sys.exit(1)

    # Create a connection to the database using the command-line arguments
    username, password, database_name = sys.argv[1:]
    engine = create_engine(f'mysql+mysqldb://{username}:{password}@localhost/{database_name}', pool_pre_ping=True)

    # Create the table in the database
    Base.metadata.create_all(engine)

    print("Table 'states' has been created in the database.")
