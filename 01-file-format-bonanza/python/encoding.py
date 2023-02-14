import codecs

testString = "This is a test string"

# Encode the string to bytes
encodedString = testString.encode("utf-8")
print("encodedString", encodedString)

# Decode the bytes back to a string
decodedString = encodedString.decode("utf-8")
print("decodedString", decodedString)

# Encode the string to bytes
encodedString = testString.encode("ascii")
print("encodedString", encodedString)

# Decode the bytes back to a string
decodedString = encodedString.decode("ascii")
print("decodedString", decodedString)

# Encode the string to bytes
encodedString = testString.encode("mac_cyrillic")
print("encodedString", encodedString)

# Decode the bytes back to a string
decodedString = encodedString.decode("mac_cyrillic")

# Encode the string to bytes
encodedString = codecs.encode(testString, "rot_13")
print("encodedString", encodedString)

# Decode the bytes back to a string
decodedString = codecs.decode(encodedString, "rot_13")
print("decodedString", decodedString)
