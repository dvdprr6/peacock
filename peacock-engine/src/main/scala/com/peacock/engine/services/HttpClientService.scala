package com.peacock.engine.services

import zhttp.http.{Headers, Method, Response}
import zhttp.service.{ChannelFactory, Client, EventLoopGroup}
import zio.{Has, RIO, RLayer, ZEnv, ZIO, ZLayer}

object HttpClientService {
  type HttpClientServiceEnv = Has[HttpClientService.Service]

  trait Service{
    def getRequest(apiKey: String, url: String): RIO[ZEnv, Response]
  }

  def getRequest(apiKey: String, url: String): RIO[ZEnv with HttpClientServiceEnv, Response] =
    ZIO.accessM(_.get[HttpClientService.Service].getRequest(apiKey, url))

  lazy val live: RLayer[ZEnv, HttpClientServiceEnv] =
    ZLayer.succeed((apiKey, url) => {
      val headers = Headers.apply("apikey", apiKey)

      for{
        response <- Client.request(url = url, method = Method.GET, headers = headers).provideCustomLayer(ChannelFactory.auto ++ EventLoopGroup.auto())
      } yield response
    })
}
