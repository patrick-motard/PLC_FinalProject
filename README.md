# PLC_FinalProject
PLC_FinalProject by pmotard &amp; jsellers


GENERATING FREQUENCY FILE:

1. function to seperate doc into list of words
2. function to make list of (name, freq) pairs
3. function to output frequence in name '->' freq format


GENERATING HUFFMAN TREE

4. function to order list by frequency
5. create data structure for node (parent, child left/right, pair)
6. create queue with insert and combine methods
7. create huffman (combine)


GENERATE MAPPING FILE:
8. function ( list of frequency/name pairs ordered by freq, and array of sequential binary numbers) outputs array of (name/binary) pairs
9. function to encode, takes original paragraph and substitues in associated binary values
10. function to decode binary into original paragraph

GIT COMMANDS
git status
git add -A
git commit -m 'message goes here'
git push
git pull

to wipe my progess to get most recent
git fetch --all
git fetch --hard origin/master