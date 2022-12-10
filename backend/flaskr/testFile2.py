
'''
    Potentially useful code for navigating course content tree,
    see pressyTempFiles



    read a json file and parse it :
        Create a dtree.js graph with python path
'''
from crayons import *
import sys
import time
import datetime
import sqlite3
import json
import ijson
import os

debug = 0


def read_json(filename):
    '''
        read json text file and convert it into json data
    '''
    with open(filename, 'r') as file:
        text_data = file.read()
    json_data = json.loads(text_data)
    return(json_data)


def parse_json_tree(json_data):
    i = 1
    for itemL0 in json_data:
        if i == 1:
            print(cyan(itemL0, bold=True))
            i = 0
            i1 = 1
            for itemL1 in itemL0:
                if i1 == 1:
                    print(red(itemL1, bold=True))
                    i1 = 0
                else:
                    print(green(itemL1, bold=True))
                    i1 = 1
        else:
            print(yellow(itemL0, bold=True))
            i = 1
            i1 = 1
            for itemL1 in itemL0:
                if i1 == 1:
                    print(red(itemL1, bold=True))
                    i1 = 0
                else:
                    print(green(itemL1, bold=True))
                    i1 = 1


def sxo_path0(path, list, index):
    word_list = path.split('.')
    ii = index
    result = ''
    print()
    print(list, index)
    print()
    for item in word_list:
        if item == 'item':
            # result=result+'['+str(list[ii])+'].'
            result = result+'[xx].'
            ii += 1
            print(yellow(item, bold=True))
        else:
            result = result+item+'.'
            print(white(item, bold=True))
    print()
    result = result[:-1]
    print(yellow(result, bold=True))
    goi = input('OK')
    return(result)


def sxo_path(path, list, index):
    word_list = path.split('.')
    ii = 0
    result = ''
    # print()
    # print(cyan(list))
    # print()
    for item in word_list:
        ii += 1
        if item == 'item':
            result = result+'['+str(list[ii]-1)+']'
            # result=result+'[xx]'
            #print(yellow(f"ii:{ii} item={item} valeur:{list[ii]-1}",bold=True))
            # print(yellow(item,bold=True))
        else:
            result = result+'["'+item+'"]'
            # print(white(item,bold=True))
    # print()
    # print(cyan(result,bold=True))
    # goi=input('OK')
    return(result)


def parse_json(json_filename, debug):
    tree = ''
    parent_base = 0
    parent = 1
    child = 0
    prefix_lenght = 0
    levels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    level_index = 0
    notes_index = 0
    nb_levels_items_list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    levels_items_name_list = ["", "", "", "", "", "", "", "",
                              "", "", "", "", "", "", "", "", "", "", "", "", "", "", ]
    upper_level = ''
    with open(json_filename, 'rb') as input_file:
        # load json iteratively
        parser = ijson.parse(input_file)
        fichier = open('result.txt', 'w')
        fichier2 = open('tree.txt', 'w')
        last_dot_count = 0
        back = 0
        word_list = ['end_map', 'map_key',
                     'end_array', 'start_array', 'start_map']
        for prefix, event, value in parser:
            print('{},-> {} = {}'.format(prefix, event, value))
            if event not in word_list:
                key_list = prefix.split('.')
                key = key_list[len(key_list)-1]
                if debug:
                    print(red(type(value), bold=True))
                link = ''
                if type(value) is str:
                    if debug:
                        print(red('value count:', bold=True))
                        print(red(value.count('\n'), bold=True))
                    if len(value) < 1000 and value.count('\n') == 0 and value.count('\r') == 0:
                        valeur = value.replace("'", "")
                    else:
                        if debug:
                            print(cyan(valeur, bold=True))
                        note_name = './result/note_'+str(notes_index)+'.txt'
                        notes_index += 1
                        with open(note_name, 'w') as note:
                            note.write(value)
                        link = './note_'+str(notes_index)+'.txt'
                        valeur = '...( LONG TEXT CONTENT- CLICK ON THIS LINK TO SEE IT )'
                else:
                    valeur = value
                    if debug:
                        print('not a string')
                if debug:
                    print(yellow(valeur, bold=True))
                line_out = '{},-> {} = {}'.format(prefix, key, valeur)
                fichier.write(line_out)
                fichier.write("\r")
                if link == '':
                    link = 'link.html'
                parent = levels[level_index]
                str_parent = str(parent)
                if debug:
                    print(red(f"level index ={level_index}", bold=True))
                    print(
                        red(f"parent level line number ={str_parent}", bold=True))
                    print(yellow(levels, bold=True))
                if key == 'item':
                    item_index = str(nb_levels_items_list[level_index])
                    nb_levels_items_list[level_index] += 1
                    key = key+item_index
                prefix2 = sxo_path(prefix, nb_levels_items_list, level_index)
                description = '<span style="color:green;font-weight:bolder">{}</span> = <span style="color:blue;font-weight:bolder">{}</span>  |---------------> {} '.format(
                    key, valeur, prefix2)
                if parent == -1:
                    description = 'JSON Tree'
                line_out2 = f"        d.add({parent_base},{str_parent},'{description}','{link}');"
                print(cyan(line_out2, bold=True))
                if debug:
                    gio = input('-- NEW KEY ADDED :')
                if line_out2 != "        d.add(0,0,'<span style=\"color:black;font-weight:bolder\"></span> |--------------->  ','');":
                    tree = tree+line_out2+'\n'
                    fichier2.write(line_out2)
                    fichier2.write("\r")
                    print(green('saved *'))
                else:
                    print(red('dont save'))
                parent_base += 1
            else:
                if event == 'start_array' or event == 'start_map':
                    if debug:
                        print(yellow('go to next level ->', bold=True))
                    key_list = prefix.split('.')
                    key = key_list[len(key_list)-1]
                    valeur = value
                    line_out = '{},-> {} = {}'.format(prefix, key, valeur)
                    fichier.write(line_out)
                    fichier.write("\r")
                    link = 'link.html'
                    mota = 'Levels : '
                    for a in range(0, level_index):
                        mota += str(levels[a])+' - '
                    print(white(mota, bold=True))
                    the_parent = levels[level_index]
                    str_parent = str(the_parent)
                    if debug:
                        print(red(f"level index ={level_index}", bold=True))
                        print(
                            red(f"parent level line number ={str_parent}", bold=True))
                        print(yellow(levels, bold=True))
                        print(yellow(levels_items_name_list, bold=True))
                    upper_level = prefix
                    prefix2 = prefix
                    print(levels_items_name_list[level_index])
                    print(key)
                    # gio=input('STOP')
                    if levels_items_name_list[level_index] != key:
                        levels_items_name_list[level_index] = key
                        nb_levels_items_list[level_index] = 0
                    if key == 'item':
                        item_index = str(nb_levels_items_list[level_index])
                        nb_levels_items_list[level_index] += 1
                        key = key+item_index
                        prefix2 = sxo_path(
                            prefix, nb_levels_items_list, level_index)
                    if parent == -1:
                        description = 'JSON Tree'
                    else:
                        description = '<span style="color:black;font-weight:bolder">{}</span> |---------------> {} '.format(
                            key, prefix2)
                    line_out2 = f"        d.add({parent_base},{str_parent},'{description}','');"
                    print(cyan(line_out2, bold=True))
                    if debug:
                        gio = input(' -> NEW CHILD KEY ARRAY ADDED:')
                    if line_out2 != "        d.add(0,0,'<span style=\"color:black;font-weight:bolder\"></span> |--------------->  ','');":
                        tree = tree+line_out2+'\n'
                        fichier2.write(line_out2)
                        fichier2.write("\r")
                        # levels[level_index]+=1
                        if debug:
                            print(green('saved to file', bold=True))
                    else:
                        if debug:
                            print(red('dont save'))
                        else:
                            pass
                    level_index += 1
                    levels[level_index] = parent_base
                    parent_base += 1
                    if debug:
                        print(yellow(levels, bold=True))
                        print(yellow(
                            f"new level_index = {level_index}  and value set to {levels[level_index]}", bold=True))
                        gio = input('en avant NEXT done >>:')
                if event == 'end_array' or event == 'end_map':
                    back = 1
                    nb_levels_items_list[level_index] = 0
                    if debug:
                        print(yellow(levels, bold=True))
                    if upper_level == prefix:
                        level_index -= 1
                        if debug:
                            print('level_index equal -1')
                    else:
                        level_index = prefix.count('.')+1
                        if debug:
                            print('count number of dots')
                    if debug:
                        print(cyan(f"{prefix} (prefix)", bold=True))
                        print(cyan(f"{upper_level} (upper_level)", bold=True))
                        print(red(levels, bold=True))
                        print(red(f"level_index = {level_index}", bold=True))
                        print(
                            red(f"next parent line = {levels[level_index]}", bold=True))
                        gio = input('en arriere BACK done<<:')
        fichier.close()
        fichier2.close()
        return(tree)


if __name__ == "__main__":

    raise Exception("No tests here buster")
