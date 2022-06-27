package com.peacock.engine.services

import com.peacock.engine.models.CommandLineOptions
import zio.{Has, UIO, URIO, URLayer, ZEnv, ZIO, ZLayer}
import zio.cli.{Command, Options}

object CommandLineOptionService {
  type CommandLineOptionServiceEnv = Has[CommandLineOptionService.Service]

  trait Service{
    def parseCommandLineOptions(): UIO[Command[CommandLineOptions]]
  }

  private val clientId: Options[String] = Options.text("clientId")
  private val clientSecret: Options[String] = Options.text("clientSecret")
  private val url: Options[String] = Options.text("url")
  private val username: Options[String] = Options.text("username")
  private val password: Options[String] = Options.text("password")

  def parseCommandLineOptions(): URIO[CommandLineOptionServiceEnv, Command[CommandLineOptions]] =
    ZIO.accessM(_.get.parseCommandLineOptions())

  lazy val live: URLayer[ZEnv, CommandLineOptionServiceEnv] =
    ZLayer.succeed(() => {
      UIO{
        val options = (clientId ++ clientSecret ++ url ++ username ++ password).as(CommandLineOptions)
        Command("Peacock Engine", options)
      }
    })
}
