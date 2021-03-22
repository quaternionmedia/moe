from setuptools import setup, find_packages

setup(
    name='moe',
    install_requires='pluggy>=0.3,<1.0',
    entry_points={'console_scripts': ['moe=moe.main:main']},
    packages=find_packages(),
)
