import glob
import os
import sys
from PIL import Image
from typing import Any, List, Tuple


#-------------------------------------------------------
# resize_card_img
#
# [discription]
#  トランプカードの画像サイズを変更する
# [args]
#  1: 拡大/縮小: 'l' or 's'  # default 's'
#  2: 倍率: 5  # default 1
#-------------------------------------------------------
card_dir = 'app/public/image/card'
suit_list = ['heart', 'clover', 'spade', 'diamond']
log_bar = '-----'

def main() -> None:
    argv_l_or_s_settig, argv_magnification = get_argv()
    l_or_s_settig, magnification = validate(argv_l_or_s_settig, argv_magnification)
    print(log_bar * 6)
    print(f'start card_img_resize')
    print(f'l_or_s_settig: {l_or_s_settig}')
    print(f'magnification: {magnification}')
    print(log_bar * 6)
    resize_all_img(l_or_s_settig, magnification)
    print(log_bar * 6)
    print(f'end card_img_resize')
    print(log_bar * 6)

def get_argv() -> Tuple[str, str]:
    len_argv = len(sys.argv)
    argv1 = sys.argv[1] if len_argv >= 2 and sys.argv[1] else ''
    argv2 = sys.argv[2] if len_argv >= 3 and sys.argv[2] else ''
    return argv1, argv2

def validate(argv_l_or_s_settig: str, argv_magnification: str) -> Tuple[str, int]:
    l_or_s_settig = 's' # default
    magnification = 1 # default

    # large_or_small_setting
    if argv_l_or_s_settig and argv_l_or_s_settig in ['l', 's']:
        l_or_s_settig = argv_l_or_s_settig

    # magnification
    if argv_magnification and argv_magnification.isdigit():
        magnification = int(argv_magnification)

    return l_or_s_settig, magnification

def resize_all_img(l_or_s_settig: str, magnification: int) -> None:
    resized_image_count = 0
    image_path_list = get_all_image_path_list()

    if magnification > 1:
        for path in image_path_list:
            img = Image.open(path)
            # lerge or small
            if l_or_s_settig == 'l':
                img_resize = img.resize((img.width * magnification, img.height * magnification))
            elif l_or_s_settig == 's':
                img_resize = img.resize((img.width // magnification, img.height // magnification))
            img_resize.save(path)

            print(f'{path} is saved')
            resized_image_count += 1
    print(f'resized image count: {resized_image_count}')

def get_image_path_of_suit(suit: str) -> List[str]:
    return glob.glob(f'{card_dir}/{suit}/*.png')

def get_all_image_path_list() -> List[str]:
    ret = []
    for suit in suit_list:
       ret += get_image_path_of_suit(suit)
    return ret

if __name__ == '__main__':
    main()