#!/usr/bin/env python

"""The setup script."""

from setuptools import setup, find_packages

with open('README.rst') as readme_file:
    readme = readme_file.read()

with open('HISTORY.rst') as history_file:
    history = history_file.read()

requirements = ['Click>=7.0',
                'rethinkdb>=1.14.0',
                'beautifulsoup4>=4.9.1',
                'lark-parser>=0.8.5',
                'jsonschema>=3.2.0',
                'gTTS>=2.1.1']

setup_requirements = ['pytest-runner', ]

test_requirements = ['pytest>=3', ]

setup(
    author="Peter Kagstrom",
    author_email='peter.kagstrom@gmail.com',
    python_requires='>=3.5',
    classifiers=[
        'Development Status :: 2 - Pre-Alpha',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Natural Language :: English',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
    ],
    description="Meticulous Oversight Engine -- Testing, logs, and validation",
    entry_points={
        'console_scripts': [
            'moe=moe.cli:main',
        ],
    },
    install_requires=requirements,
    license="MIT license",
    long_description=readme + '\n\n' + history,
    include_package_data=True,
    keywords='moe',
    name='moe',
    packages=find_packages(include=['moe', 'moe.*']),
    setup_requires=setup_requirements,
    test_suite='tests',
    tests_require=test_requirements,
    url='https://github.com/quaternionmedia/moe',
    version='0.1.0',
    zip_safe=False,
)
