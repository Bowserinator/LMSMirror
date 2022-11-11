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

def authenticate(RCSID):

    # !!!!! IT SEEMS NIKO AND I ARE WORKING ON THE EXACT SAME THING
    # !!!!! A coversation may be in order...

    # https://lms.rpi.edu
    # /learn/api/public/v1/oauth2/authorizationcode
    # /learn/api/public/v1/oauth2/token
    # /learn/api/public/v1/oauth2/tokeninfo

    # Bowser's Duo passer give us cookie for 24 hour log in
    # Could be another way to do this

    raise Exception("Function not finished")


def getCourseIDs(RCSID):

    # build URL with RCSID
    url = "https://lms.rpi.edu/learn/api/public/v1/users/userName:" \
        + RCSID + "/courses"

    page = requests.get(url)

    # may have to use flask here to authenticate after all...

    print(page.text)

    # will neeed to convert to json probably

    # !!!!! needs to find which course IDs are current courses

    raise Exception("Function not finished")


if __name__ == '__main__':  # personal testing code

    getCourseIDs("waterp2")
