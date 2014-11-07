git config --global user.email "ljschauerman@gmail.com"
git config --global user.name "Liam Schauerman"
echo "Host heroku.com" >> ~/.ssh/config
echo "   StrictHostKeyChecking no" >> ~/.ssh/config
echo "   CheckHostIP no" >> ~/.ssh/config; 
echo "   UserKnownHostsFile=/dev/null" >> ~/.ssh/config;
if [[ $TRAVIS_PULL_REQUEST == "false" && $TRAVIS_BRANCH == "master" ]]
  then 
    npm install heroku
    git remote add git@heroku.com:mtcolt.git
    wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
    heroku keys: clear
    # ssh-keygen -t rsa
    echo yes | heroku keys:add
    # ssh-add ~/.ssh/heroku_rsa
    grunt build
    echo yes | grunt buildcontrol:heroku
    heroku keys:clear
fi
if [[ $TRAVIS_PULL_REQUEST == "false" ]]
  then
    echo $TRAVIS_BRANCH
fi
echo "...done."