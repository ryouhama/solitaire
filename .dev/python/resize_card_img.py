import glob
import os
import sys
from logging import getLogger
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
#  3: デフォルトにサイズにするか: 'resize_default_size'
#-------------------------------------------------------
card_dir = 'app/public/image/card'
suit_list = ['heart', 'clover', 'spade', 'diamond']
img_size = {'vertical': 201, 'wide': 142}
logger = getLogger(__name__)

def main() -> None:
    argv_l_or_s_settig, argv_magnification, argv_resize_default_size = get_argv()

    logger.info(f'argv_l_or_s_settig: {argv_l_or_s_settig}')
    logger.info(f'argv_magnification: {argv_magnification}')
    logger.info(f'argv_resize_default_size: {argv_resize_default_size}')

    l_or_s_settig, magnification, resize_default_size = \
        validate(argv_l_or_s_settig, argv_magnification, argv_resize_default_size)

    logger.info(f'start card_img_resize')
    logger.info(f'l_or_s_settig: {l_or_s_settig}')
    logger.info(f'magnification: {magnification}')

    resize_all_img(l_or_s_settig, magnification, resize_default_size)

    logger.info(f'end card_img_resize')

def get_argv() -> Tuple[str, str, str]:
    len_argv = len(sys.argv)
    argv1 = sys.argv[1] if len_argv >= 2 and sys.argv[1] else ''
    argv2 = sys.argv[2] if len_argv >= 3 and sys.argv[2] else ''
    argv3 = sys.argv[3] if len_argv >= 4 and sys.argv[3] else ''
    return argv1, argv2, argv3

def validate(argv_l_or_s_settig: str, argv_magnification: str, argv_resize_default_size: str) -> Tuple[str, int, str]:
    l_or_s_settig = 's' # default
    magnification = 1 # default
    is_resize_default_size = False # default

    # large_or_small_setting
    if argv_l_or_s_settig and argv_l_or_s_settig in ['l', 's']:
        l_or_s_settig = argv_l_or_s_settig
        print(l_or_s_settig)

    # magnification
    if argv_magnification and argv_magnification.isdigit():
        magnification = int(argv_magnification)
        print(magnification)

    # is_resize_default_size
    if argv_resize_default_size == 'resize_default_size':
        is_resize_default_size = True
        print(is_resize_default_size)

    return l_or_s_settig, magnification, is_resize_default_size

def resize_all_img(l_or_s_settig: str, magnification: int, is_resize_default_size: bool) -> None:
    resized_image_count = 0
    image_path_list = get_all_image_path_list()

    if is_resize_default_size or magnification > 1:
        for path in image_path_list:
            img = Image.open(path)
            # lerge or small
            if is_resize_default_size:
                img_resize = img.resize((img_size['wide'], img_size['vertical']))
            elif l_or_s_settig == 'l':
                img_resize = img.resize((img.width * magnification, img.height * magnification))
            elif l_or_s_settig == 's':
                img_resize = img.resize((img.width // magnification, img.height // magnification))
            img_resize.save(path)

            print(f'{path} is saved')
            resized_image_count += 1
    logger.info(f'resized image count: {resized_image_count}')

def get_image_path_of_suit(suit: str) -> List[str]:
    return glob.glob(f'{card_dir}/{suit}/*.png')

def get_all_image_path_list() -> List[str]:
    ret = []
    # all card
    for suit in suit_list:
       ret += get_image_path_of_suit(suit)
    # back-side-card
    ret.append(f'{card_dir}/back-side-card.png')
    # set
    ret.append(f'{card_dir}/set.png')
    return ret

if __name__ == '__main__':
    main()
