"""Console script for moe."""
import sys
import click
from moe.diagnostics import runSelfTest

@click.command()
def main(args=None):
    """Console script for moe."""
    click.echo("Replace this message by putting your code into "
               "moe.cli.main")
    click.echo("See click documentation at https://click.palletsprojects.com/")
    return 0

@click.command()
def selfTest():
    runSelfTest()

if __name__ == "__main__":
    sys.exit(main())  # pragma: no cover
