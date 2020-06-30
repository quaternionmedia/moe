#!/usr/bin/python3
#-*- coding:utf-8 -*-

import re
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse
import os
from pprint import pprint
import click

from log import getLogger
log = getLogger('scrape')


@click.command()
@click.option('-u', '--url', default='https://quaternion.media/projects', prompt='Webpage to grab images from')
@click.option('-d', '--dest', default='.', prompt='Where to save images')
@click.option('-i', '--linkid', default='data-src', prompt='which html tag to target')
@click.option('-n', '--download/--no-download', default=True, prompt='download?')
def imgsFromUrl(url='https://www.quaternion.media/projects', linkid='data-src', dest='', download=True):
    page = requests.get(url).text
    soup = BeautifulSoup(page, 'html.parser')
    outlinks = []
    for raw_img in soup.find_all('img'):

        #TODO add check for value content, not key, fix import
        link = raw_img.get(linkid)
        if(link is not None):
            log.info(f'downloading {link}')
            if(download): os.system(f'wget -P {dest} {link}')
            outlinks.append(link)
    log.info(f'downloaded {len(outlinks)} images')
    # log.debug([url,linkid,page,outlinks])
    return outlinks

@click.command()
@click.option('-w', '--word', default='quaternion', prompt='What word to get images of?')
def download_google(word='quaternion'):
    url = 'https://www.google.com/search?q=' + word + '&client=opera&hs=cTQ&source=lnms&tbm=isch&sa=X&ved=0ahUKEwig3LOx4PzKAhWGFywKHZyZAAgQ_AUIBygB&biw=1920&bih=982'
    page = requests.get(url).text
    soup = BeautifulSoup(page, 'html.parser')
    for raw_img in soup.find_all('img'):
       link = raw_img.get('src')
       os.system("wget " + link)

@click.command()
@click.option('-w', '--word', default='quaternion', prompt='What word to get images of?')
def download_baidu(word='quaternion'):
    url = 'https://image.baidu.com/search/flip?tn=baiduimage&ie=utf-8&word='+word+'&ct=201326592&v=flip'
    result = requests.get(url)
    html = result.text
    pic_url = re.findall('"objURL":"(.*?)",',html,re.S)
    i = 0

    for each in pic_url:
        print(pic_url)
        try:
            pic= requests.get(each, timeout=10)
        except requests.exceptions.ConnectionError:
            print ('exception')
            continue

        string = 'pictures'+word+'_'+str(i) + '.jpg'
        fp = open(string,'wb')
        fp.write(pic.content)
        fp.close()
        i += 1

@click.command()
@click.option('--cmd', prompt='What to scrape [url/google/baidu]')
def cli(cmd: str):
    if(cmd == 'url'):
        imgsFromUrl()
    elif(cmd == 'google'):
        download_google()
    elif(cmd == 'baidu'):
        download_baidu()



if __name__ == '__main__':
    cli()
