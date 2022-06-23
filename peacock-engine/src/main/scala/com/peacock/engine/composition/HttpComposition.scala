package com.peacock.engine.composition

import com.peacock.engine.models.CommandLineOptions
import com.peacock.engine.services.HttpClientService
import zio.{RIO, ZEnv}

object HttpComposition {

  class Service(httpClientService: HttpClientService.Service){

    def getRequest(params: CommandLineOptions): RIO[ZEnv, Array[Byte]] = {
      val clientId = params.clientId
      val clientSecret = params.clientSecret

      
    }
  }

}
