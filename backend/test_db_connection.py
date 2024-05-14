import os
from dotenv import load_dotenv
import pyodbc

load_dotenv()

connection_string = (
    'DRIVER={ODBC Driver 18 for SQL Server};'
    f'SERVER=tcp:{os.getenv("HOST")},{os.getenv("PORT")};'
    f'DATABASE={os.getenv("NAME")};'
    f'UID={os.getenv("USER")};'
    f'PWD={os.getenv("PASSWORD")};'
    'Encrypt=yes;'
    'TrustServerCertificate=yes;'
    'Connection Timeout=30;'
)

try:
    conn = pyodbc.connect(connection_string)
    print("Connection successful")
    conn.close()
except Exception as e:
    print(f"Connection failed: {e}")


