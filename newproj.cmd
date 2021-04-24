set appName=spass11
@echo on
rd foo /s /q
mkdir foo
cd foo
call npm install @angular/cli
cd ..
call foo/node_modules/.bin/ng --version
call foo/node_modules/.bin/ng new --help
rd %appName% /s /q
git clone https://github.com/ttestman4/%appName%.git
call foo/node_modules/.bin/ng new spa --directory %appName% --create-application false --routing --skip-install --style scss --strict -v 
rd foo /s /q
cd %appName%
copy ..\newproj.cmd
cmd /c npm install
call npm run ng -- g application spa1 -p spa  --routing --skip-install --style scss --strict 
call npm run ng -- g library non-functional -p nf
start code .
cmd /c npm install
