# Example 1 - using dotenv_values
from dotenv import load_dotenv, dotenv_values

dotenv_values = dotenv_values()
print(dotenv_values.get("MY_SECRET"))

# Example 2 - using load_dotenv ( more verbose )
load_dotenv()
import os
print(os.getenv("MY_SECRET"))

