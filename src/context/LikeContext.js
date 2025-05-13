import { createContext, useState, useContext, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likes, setLikes] = useState(() => {
    const storedLikes = localStorage.getItem('likes');
    return storedLikes ? JSON.parse(storedLikes) : [];
  });

  const { t } = useTranslation();
  const knifecardarr = t('knifecards', { returnObjects: true });
  const lights = t('lights', { returnObjects: true });
  const [messageApi, contextHolder] = message.useMessage();
   const success = () => {
    messageApi.open({
      type: 'success',
      content: t('addToLikes'),
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: t('errorLikes'),
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: t('removeFromLikes'),
    });
  };
  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  const likeItems = useMemo(() => {
    const combinedLikeItems = [...knifecardarr, ...lights];
    return combinedLikeItems.filter((item) => likes.includes(Number(item.id)));
  }, [likes, knifecardarr, lights]);

  const addLike = (itemId) => {
    if (!likes.includes(itemId)) {
      setLikes(prev => [...prev, itemId]);
      success();
    } else {
      error();
    }
  };

  const removeLike = (itemId) => {
    setLikes(prev => prev.filter(id => id !== itemId));
    warning();
  };

  const isLiked = (itemId) => likes.includes(itemId);

  return (
    <LikeContext.Provider value={{ likes, addLike, removeLike, isLiked, likeItems }}>
      {children}
            {contextHolder}
    </LikeContext.Provider>
  );
};

export const useLikes = () => useContext(LikeContext);
