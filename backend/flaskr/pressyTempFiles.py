# -*- coding: utf-8 -*-
"""
Created on Fri Nov  4 16:52:18 2022

@author: Preston Waters
"""
from urllib.request import urlopen
import json


# Temporary code location for API_wrapper functions Preston writes
# to avoid any git issues

# Grabs user's course ID's
# !!!!! Requires that LMS is logged into already


def getCourseIDs(RCSID):

    # build URL with RCSID
    url = "https://lms.rpi.edu/learn/api/public/v1/users/userName:" \
        + RCSID + "/courses"

    # store the response of URL
    response = urlopen(url)

    # storing the JSON data from the response
    data = json.loads(response.read())

    print(data)

    # !!!!! needs to find which course IDs are current courses

    raise Exception("Function not finished")


if __name__ == '__main__':  # personal testing code

    getCourseIDs("waterp2")
