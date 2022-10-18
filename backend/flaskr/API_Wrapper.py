# -*- coding: utf-8 -*-
"""
Created on Tue Oct 18 16:28:18 2022

@author: Preston Waters
"""

"""
https://developer.blackboard.com/portal/displayApi


https://stackoverflow.com/questions/12965203/how-to-get-json-from-webpage-into-python-script
or use Preston's old code that grabs a .json file
if you're fine using beautifulSoup
"""

# This should be functions that return json files for various things

import json
import urllib.request

class apiWrapper(object):

    def get_json_data(url):
        # returns dict of json from url
        response = urllib.request.urlopen(url)
        data = response.read().decode('utf-8')
        return json.loads(data)

    # OAUTH
    class oauth():
        pass
    # adaptive release
    class adaptRelease():
        # GET
        def getRules( courseID, contentID ):
            pass           
        
    # announcements
    # attempt receipt
    # attendance
    # calendar
    # content
    # content collection resources
    # content file attachments
    # content group assigments
    # content resources
    # content review
    # course announcements
    # course assesments
    # course categories
    # course grade attempts
    # course grade notations
    # course gradebook categories
    # course grades
    # course grading periods
    # course group users
    # course groups
    # course memberships
    # course messages
    # course toc
    # courses
    # data sources
    # discussions
    # institutional hierarchy 
    # institutional hierarchy administrators
    # performance dashboard
    # proctoring
    # pronouns
    # roles
    # rubrics
    # sessions
    # SIS logs
    # system
    # terms
    # uploads
    # users


if __name__ == '__main__':  # personal testing code

    raise Exception("No tests here buster")
