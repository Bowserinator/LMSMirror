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

cookies = 'BbRouter=expires:1670441224,id:E2AD449E14EDAF7B1DD4B76E0A26C9E1,signature:a25f120d6df03d075663286724bbde7f36a802231cf27e82e3b42a1f72a295d6,site:f5b31764-7cc8-408f-b458-3b6bd827bdce,timeout:10800,user:8b645d4ae3f94a70b635344493d8dda3,v:2,xsrf:b52e1405-36a2-4995-901f-f12c35f058b8;AWSELB=ED87BBC10A6A4EA6C75C1F19A2B35CD89C0F9744EEA28893F3B34E84881DFD5F952EE61FD0744581B36F8EBFF862E61B4EEE5FE0A4F72426CC63D221293FC338AA89CF1E47;COOKIE_CONSENT_ACCEPTED=true;JSESSIONID=0D1F25ADCA513CCA195CB05112593F48;BbClientCalenderTimeZone=America/New_York;AWSELBCORS=ED87BBC10A6A4EA6C75C1F19A2B35CD89C0F9744EEA28893F3B34E84881DFD5F952EE61FD0744581B36F8EBFF862E61B4EEE5FE0A4F72426CC63D221293FC338AA89CF1E47'


def authenticate(RCSID):

    # This needs to grab the content from the cookie.txt file
    # and set cookies = to it
    # Doing that is pointless until the node.js script writes to the file...

    raise Exception("Function not finished")


def getCourseIDs(RCSID):

    # build URL with RCSID
    url = "https://lms.rpi.edu/learn/api/public/v1/users/userName:" \
        + RCSID + "/courses"

    page = requests.get(url, headers={"cookie": cookies})

    print(page.text)

    # will neeed to convert to json probably

    # !!!!! needs to find which course IDs are current courses

    raise Exception("Function not finished")


def getContent(courseID):
    """
    See testFile2 for potentially useful code

    """

    # make course ID into propper form
    url = "https://lms.rpi.edu/learn/api/public/v1/courses/"\
        + courseID + "/contents"

    page = requests.get(url, params=(), headers={"cookie": cookies})

    print(page.text)

    # course content file lists
    # go to sub file

    raise Exception("Function not finished")


def getGrades(courseID):

    raise Exception("Function not finished")


def getAnnouncements(courseID):

    raise Exception("Function not finished")


if __name__ == '__main__':  # personal testing code

    # getCourseIDs("waterp2")
    getContent("_13416_1")  # Preston's biology course
