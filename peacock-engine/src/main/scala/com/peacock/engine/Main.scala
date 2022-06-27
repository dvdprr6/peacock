package com.peacock.engine
import com.peacock.engine.composition.CommandLineOptionComposition
import com.peacock.engine.composition.CommandLineOptionComposition.CommandLineOptionCompositionEnv
import com.peacock.engine.models.CommandLineOptions
import com.peacock.engine.services.CommandLineOptionService
import zhttp.http._
import zhttp.http.middleware.HttpMiddleware
import zhttp.service.Server
import zio.cli.CliApp
import zio.cli.HelpDoc.Span.text
import zio.clock.Clock
import zio.console.Console
import zio.{ExitCode, RIO, URIO, ZEnv, ZIO, ZLayer}

import java.io.IOException

object Main extends zio.App {
  private val PEACOCK_ENGINE = "peacock-engine"

  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =
    (for{
      command <- CommandLineOptionComposition.parse().provideLayer(commandLineOptionsLayer)
      cliApp = CliApp.make("Peacock Engine", "0.0.1", text("Peacock Engine"), command)(execute)
      _ <- cliApp.run(args)
    } yield()).exitCode

  private def app(params: CommandLineOptions): Http[Any, Nothing, Request, Response] = Http.collectZIO[Request] {
    case Method.GET -> !! / PEACOCK_ENGINE / "run" => ZIO.succeed(Response.text(params.url))
  }

  private val middlewares: HttpMiddleware[Console with Clock, IOException] =
    Middleware.debug ++ Middleware.addHeader("X-Environment", "Dev")

  private def execute(params: CommandLineOptions): RIO[ZEnv, Unit] =
    for{
      _ <- Server.start(8090, app(params) @@ middlewares).exitCode
    } yield()

  private lazy val commandLineOptionsLayer: ZLayer[ZEnv, Nothing, CommandLineOptionCompositionEnv] =
    CommandLineOptionService.live >>> CommandLineOptionComposition.live

  private def
}
