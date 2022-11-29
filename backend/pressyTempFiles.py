# -*- coding: utf-8 -*-
"""
Created on Fri Nov  4 16:52:18 2022

@author: Preston Waters
"""
from urllib.request import urlopen
import json

import requests


# Temporary code location for API_wrapper functions Preston writes
# to avoid any git issues

# Grabs user's course ID's
# !!!!! Requires that LMS is logged into already


def getCourseIDs(RCSID):

    # build URL with RCSID
    url = "https://lms.rpi.edu/learn/api/public/v1/users/userName:" \
        + RCSID + "/courses"

    page = requests.get(url)

    print(page.text)

    # will neeed to convert to json probably

    # !!!!! needs to find which course IDs are current courses

    raise Exception("Function not finished")


if __name__ == '__main__':  # personal testing code

    getCourseIDs("waterp2")
