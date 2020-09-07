import {FETCH_POSTS} from "./types";

export const fetchPosts = () => async (dispatch) => {
  const res = await fetch("https://www.reddit.com/.json?limit=100");
  const data = await res.json();
  const chekImg = (imgUrl) => {
    if (imgUrl === 'default' ||
        imgUrl === undefined ||
        imgUrl === 'self' ||
        imgUrl === 'spoiler' ||
        imgUrl === 'nsfw' ||
        imgUrl === 'image') {
      return '/images/reddit.png'
    } else return imgUrl
  }

  const tmp = data.data.children.map((item) => {
    return {
      title: item.data.title,
      url: "https://www.reddit.com/" + item.data.permalink,
      img: chekImg(item.data.thumbnail),
    }
  });

  dispatch({
    type: FETCH_POSTS,
    payload: tmp,
  });
}