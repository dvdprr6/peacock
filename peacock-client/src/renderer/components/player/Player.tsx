import React, { FC, useEffect } from 'react'
import { connector, TPropsFromRedux, TAppDispatch, getCurrentTrack, getAuthTokens } from '@peacock-renderer-reducers'
import { useDispatch } from 'react-redux'

const Player: FC<TPropsFromRedux> = (props) => {
  const dispatch: TAppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentTrack()).then()
  }, [])

  return <p>This is Player</p>
}

export default connector(Player)