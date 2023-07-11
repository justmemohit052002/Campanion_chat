import React, { useState, useEffect } from 'react';
import { getChannel, useChatContext } from 'stream-chat-react';
import { SearchIcon } from '../assets';

const ChannelSearch = () => {
  const [query,setQuerry] = useState('');
  const [loading,setLoading] = useState('false');

  const getChannels = async(text)=>{
    try{
      //TODO: fetch channels
    } catch(error){
      setQuerry('')
    }
  }

  const onSearch = (event)=>{
    event.preventDefault();

    setLoading(true);
    setQuerry(event.target.value);
    getChannels(event.target.value);
  }
  return (
    <div className='channel-search__container'>
      <div className='channel-search__input__wrapper'>
        <div className='channel-search__imput__icon'>
          <SearchIcon />
        </div>
        <input 
        className='channel-search__input__text'
        placeholder='Search'
        type='text'
        value={query}
        onChange={onSearch}/>
      </div>
    </div>
  );
}

export default ChannelSearch;