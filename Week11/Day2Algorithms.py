# Given a string of characters, return the character that appears the most often.
# def most_character(string):
#     count_array = []
#     letter_index = 0
#     count = 0

#     for i in range(len(string)):
#         count = string.count(string[i])
#         count_array.append([i, count])

#     for i in range(len(count_array)):
#         countLoop = count_array[i][1]
#         if countLoop > count:
#             letter_index = count_array[i][0]
#             count = countLoop

#     letter = string[letter_index]
    
#     return print(letter)

# most_character("abracadabra")       

# Anagrams are words or phrases that contain the same number of characters. Create a function that checks for this.
# def anagram(string1, string2):
#     answer = True

#     for i in string1:
#         found = string2.find(i)
#         if found == -1:
#             answer = False

#     if answer:
#         return(print("These words are anagrams."))
#     else:
#         return(print("These words are not anagrams."))

# anagram("below", "elbow")
# anagram("orange", "twelve")

# Given a string of words or phrases, count the number of vowels.
# def count_vowels(string):
#     vowel_list = ["a", "e", "i", "o", "u"]
#     count = 0

#     for i in string:
#         for j in vowel_list:
#             if i == j:
#                 count += 1
    
#     return(print(count))

# count_vowels("This is a sentence.")

# Given an array and a size, split the array items into a list of arrays of the given size.

# def split_arrays(array, size):
#     new_array = []
#     max_len = size
#     beg = 0
#     end = max_len
#     j = 0
    
#     while j <= len(array) + 1:
#         new_list = array[beg: end]
#         new_array.append(new_list)
#         j += max_len
#         beg += max_len
#         end += max_len


#     return print(new_array)

# split_arrays([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3)


# Given an array of items, reverse the order.

# def rev_arr(array):
#     new_array = []
#     length = len(array) - 1

#     for i in range(length, -1, -1):
#         new_array.append(array[i])
#         print(array[i])

#     return(print(new_array))

# rev_arr([1, 2, 3, 4])

# Given a phrase, capitalize every word.

# def capitalize(string):
#     new_list = string.split(" ")
#     final_list = []

#     for i in new_list:
#         word = i.capitalize()
#         final_list.append(word)

#     final_string = ' '.join(final_list)
#     return(print(final_string))

# capitalize("capitalize on this")

# Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. If necessary, the shifting should wrap around back to the beginning or end of the alphabet.
# def shift_letters(string, shift_num):
#     new_string = ''

#     for i in string:
#         if i != ' ':
#             code = ord(i)
        
#             if code < 122:
#                 code += shift_num
#                 letter = chr(code)
#                 new_string += letter
#             else:
#                 new_code = 123 + (shift_num - 1)
#                 letter = chr(new_code)
#                 new_string += letter
#         else:
#             new_string += ' '

#     return(print(new_string))


# shift_letters("this is a phrase", 2)

# Given an array of numbers, calculate the mean, median, and mode.
def calculate(array):
    array.sort()

    total = 0
    mean = 0
    median = 0
    mode = 0

    for i in array:
        total += i

    mean = total / len(array)

    if len(array) % 2 != 0:
        median = float(array[len(array) // 2])
    else:
        median = float((array[int((len(array) - 1) / 2)]) + array[int((len(array) / 2))] / 2.0)

    count_array = []
    num_index = 0
    count = 0

    for i in range(len(array)):
        count = array.count(array[i])
        count_array.append([i, count])

    for i in range(len(count_array)):
        countLoop = count_array[i][1]
        if countLoop > count:
            num_index = count_array[i][0]
            count = countLoop

    mode = array[num_index]

    return(print(mean, median, mode))

calculate([1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10])