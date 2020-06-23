from gtts import gTTS
import subprocess as sp
from moe.diagnostics import t
# from osing import dependsOn

# TODO: add checks for gtts-cli and mpg321
# @dependsOn('gtts-cli')
# @dependsOn('mpg321')
def say(text: str, lang='en-uk', save=False,fileout=t()):
    tts = gTTS(text=text, lang=lang)
    if save:
        tts.save(fileout)
        if(say): sp.run(f'mpg321 {fileout}')
    else:
        if(say): sp.run(f"gtts-cli \'{text}\' | play -t mp3 -", shell=True)

if __name__ == '__main__':
    say('hi')
