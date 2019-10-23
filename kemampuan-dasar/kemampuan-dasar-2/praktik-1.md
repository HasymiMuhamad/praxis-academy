# 1. Create a New Project and Host it on Github


muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git
$ mkdir learn

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git
$ ls
learn/

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git
$ cd learn

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn
$ git init
Initialized empty Git repository in E:/praxis-academy-git/learn/.git/

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ touch README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ ls
README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git add README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git commit -m 'First commit.'
[master (root-commit) bc13a17] First commit.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ echo 'This is repo that show how to learn git versioning control system' >> README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git diff
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory
diff --git a/README.txt b/README.txt
index e69de29..e7090f2 100644
--- a/README.txt
+++ b/README.txt
@@ -0,0 +1 @@
+This is repo that show how to learn git versioning control system

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git add README.txt
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git commit -m 'Add Readme.txt explanation'
[master 5ad7edd] Add Readme.txt explanation
 1 file changed, 1 insertion(+)

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ ls
README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ ls
README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ wget https://www.acquia.com/sites/default/files/blog/all-around-the-mulberry-bush.txt
wget https://www.acquia.com/sites/default/files/blog/old-mother-hubbard.txt
wget https://www.acquia.com/sites/default/files/blog/twinkle-twinkle.txt
wget https://www.acquia.com/sites/default/files/blog/hokey-pokey.txtbash: wget: command not found

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ wget https://www.acquia.com/sites/default/files/blog/jack-and-jill.txt
bash: wget: command not found

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ wget https://www.acquia.com/sites/default/files/blog/old-mother-hubbard.txt
bash: wget: command not found

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ wget https://www.acquia.com/sites/default/files/blog/twinkle-twinkle.txt
bash: wget: command not found

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ wget https://www.acquia.com/sites/default/files/blog/hokey-pokey.txt
bash: wget: command not found

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ ls
README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ touch coba.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ ls
coba.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ touch belajar.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ ls
belajar.txt  coba.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git add belajar.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ ls
belajar.txt  coba.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   belajar.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        coba.txt


muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git commit -m "add belajar.txt"
[master 540b701] add belajar.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 belajar.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        coba.txt

nothing added to commit but untracked files present (use "git add" to track)

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git add coba.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ ls
belajar.txt  coba.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   coba.txt


muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git commit -m "add coba.txt"
[master 534f61d] add coba.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 coba.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ touch coba1.txt coba2.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ ls
belajar.txt  coba.txt  coba1.txt  coba2.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        coba1.txt
        coba2.txt

nothing added to commit but untracked files present (use "git add" to track)

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git add .

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   coba1.txt
        new file:   coba2.txt


muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git commit -m "add coba1.txt and coba2.txt"
[master dfa2940] add coba1.txt and coba2.txt
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 coba1.txt
 create mode 100644 coba2.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git log
commit dfa2940898fe202cf241aa65ec57b11e1a2e4d3c (HEAD -> master)
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
Date:   Wed Oct 23 11:06:07 2019 +0700

    add coba1.txt and coba2.txt

commit 534f61d4c9c68a5ff18b429c1453dbfa0055c7d4
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
Date:   Wed Oct 23 11:04:55 2019 +0700

    add coba.txt

commit 540b701c1fa944c52993fe861f542445dbd532de
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
Date:   Wed Oct 23 11:04:21 2019 +0700

    add belajar.txt

commit 5ad7edd42ff167fac3b6e1539fdc7efb92b43956
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
Date:   Wed Oct 23 10:58:28 2019 +0700

    Add Readme.txt explanation

commit bc13a172a4227975c1f4a8e353b947d30fcdc1cd
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
Date:   Wed Oct 23 10:56:08 2019 +0700

    First commit.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git log -oneline
fatal: unrecognized argument: -oneline

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git log --oneline
dfa2940 (HEAD -> master) add coba1.txt and coba2.txt
534f61d add coba.txt
540b701 add belajar.txt
5ad7edd Add Readme.txt explanation
bc13a17 First commit.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git log -p
commit dfa2940898fe202cf241aa65ec57b11e1a2e4d3c (HEAD -> master)
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
Date:   Wed Oct 23 11:06:07 2019 +0700

    add coba1.txt and coba2.txt

diff --git a/coba1.txt b/coba1.txt
new file mode 100644
index 0000000..e69de29
diff --git a/coba2.txt b/coba2.txt
new file mode 100644
index 0000000..e69de29

commit 534f61d4c9c68a5ff18b429c1453dbfa0055c7d4
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
Date:   Wed Oct 23 11:04:55 2019 +0700

    add coba.txt

diff --git a/coba.txt b/coba.txt
new file mode 100644
index 0000000..e69de29

commit 540b701c1fa944c52993fe861f542445dbd532de
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
Date:   Wed Oct 23 11:04:21 2019 +0700

    add belajar.txt

diff --git a/belajar.txt b/belajar.txt
new file mode 100644
index 0000000..e69de29

commit 5ad7edd42ff167fac3b6e1539fdc7efb92b43956
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
Date:   Wed Oct 23 10:58:28 2019 +0700

    Add Readme.txt explanation

diff --git a/README.txt b/README.txt
index e69de29..e7090f2 100644
--- a/README.txt
+++ b/README.txt
@@ -0,0 +1 @@
+This is repo that show how to learn git versioning control system

commit bc13a172a4227975c1f4a8e353b947d30fcdc1cd
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
Date:   Wed Oct 23 10:56:08 2019 +0700
log file:

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
gt remote add origin https://github.com/HasymiMuhamad/learn-git.git
bash: gt: command not found

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git remote add origin https://github.com/HasymiMuhamad/learn-git.git

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$ git push -u origin master
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 4 threads
Compressing objects: 100% (9/9), done.
Writing objects: 100% (12/12), 1.08 KiB | 185.00 KiB/s, done.
Total 12 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/HasymiMuhamad/learn-git.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/praxis-academy-git/learn (master)
$

# 2. Another Person Pull Project and Make Simple Changes


muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull
$ git clone https://github.com/HasymiMuhamad/learn-git.git
Cloning into 'learn-git'...
remote: Enumerating objects: 12, done.
remote: Counting objects: 100% (12/12), done.
remote: Compressing objects: 100% (7/7), done.
remote: Total 12 (delta 2), reused 12 (delta 2), pack-reused 0
Unpacking objects: 100% (12/12), done.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull
$ ls
learn-git/

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull
$ cd learn-git/

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull/learn-git (master)
$ ls
belajar.txt  coba.txt  coba1.txt  coba2.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull/learn-git (master)
$ git checkout -b data
Switched to a new branch 'data'

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull/learn-git (data)
$ touch data1.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull/learn-git (data)
$ ls
belajar.txt  coba.txt  coba1.txt  coba2.txt  data1.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull/learn-git (data)
$ branch
bash: branch: command not found

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull/learn-git (data)
$ git branch
* data
  master

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull/learn-git (data)
$ touch data2.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull/learn-git (data)
$ ls
belajar.txt  coba.txt  coba1.txt  coba2.txt  data1.txt  data2.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull/learn-git (data)
$ git status
On branch data
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        data1.txt
        data2.txt

nothing added to commit but untracked files present (use "git add" to track)

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull/learn-git (data)
$ git add data1.txt data2.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull/learn-git (data)
$ git commit -m "add data1.txt data2.txt"
[data 83fefea] add data1.txt data2.txt
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 data1.txt
 create mode 100644 data2.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull/learn-git (data)
$ git push origin data
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 243 bytes | 243.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'data' on GitHub by visiting:
remote:      https://github.com/HasymiMuhamad/learn-git/pull/new/data
remote:
To https://github.com/HasymiMuhamad/learn-git.git
 * [new branch]      data -> data

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull/learn-git (data)
$ git branch
* data
  master

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull/learn-git (data)
$ ls
belajar.txt  coba.txt  coba1.txt  coba2.txt  data1.txt  data2.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/friend-pull/learn-git (data)

# 3. Pull Another Branch and Merge to Master Branch

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git
$ ls
learn/

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git
$ cd learn

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ ls
belajar.txt  coba.txt  coba1.txt  coba2.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git remote rename origin user1

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git branch
* master

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git branch data

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git branch
  data
* master

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git branch checkout data

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git branch
  checkout
  data
* master

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git branch
  checkout
  data
* master

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git branch
  checkout
  data
* master

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git remote
user1

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git remote -v
user1   https://github.com/HasymiMuhamad/learn-git.git (fetch)
user1   https://github.com/HasymiMuhamad/learn-git.git (push)

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git fetch origin data
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git fetch user1 data
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 2 (delta 1), reused 2 (delta 1), pack-reused 0
Unpacking objects: 100% (2/2), done.
From https://github.com/HasymiMuhamad/learn-git
 * branch            data       -> FETCH_HEAD
 * [new branch]      data       -> user1/data

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git branch -a
  checkout
  data
* master
  remotes/user1/data
  remotes/user1/master

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git checkout -b master data
fatal: A branch named 'master' already exists.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git checkout -b data data/data1.txt
fatal: 'data/data1.txt' is not a commit and a branch 'data' cannot be created from it

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git diff master data

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git log -1 -p
commit dfa2940898fe202cf241aa65ec57b11e1a2e4d3c (HEAD -> master, user1/master, data, checkout)
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
Date:   Wed Oct 23 11:06:07 2019 +0700

    add coba1.txt and coba2.txt

diff --git a/coba1.txt b/coba1.txt
new file mode 100644
index 0000000..e69de29
diff --git a/coba2.txt b/coba2.txt
new file mode 100644
index 0000000..e69de29

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git checkout master
Already on 'master'
Your branch is up to date with 'user1/master'.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git merge data
Already up to date.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git status
On branch master
Your branch is up to date with 'user1/master'.

nothing to commit, working tree clean

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git pull branch data
fatal: 'branch' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git pull data
fatal: 'data' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ ls
belajar.txt  coba.txt  coba1.txt  coba2.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git branch
  checkout
  data
* master

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git branch data
fatal: A branch named 'data' already exists.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git pull user1 data
From https://github.com/HasymiMuhamad/learn-git
 * branch            data       -> FETCH_HEAD
Updating dfa2940..83fefea
Fast-forward
 data1.txt | 0
 data2.txt | 0
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 data1.txt
 create mode 100644 data2.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ ls
belajar.txt  coba.txt  coba1.txt  coba2.txt  data1.txt  data2.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git push user1 master
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/HasymiMuhamad/learn-git.git
   dfa2940..83fefea  master -> master

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ ls
belajar.txt  coba.txt  coba1.txt  coba2.txt  data1.txt  data2.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git status
On branch master
Your branch is up to date with 'user1/master'.

nothing to commit, working tree clean

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git pull user1 data
From https://github.com/HasymiMuhamad/learn-git
 * branch            data       -> FETCH_HEAD
Already up to date.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ ls
belajar.txt  coba.txt  coba1.txt  coba2.txt  data1.txt  data2.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git status
On branch master
Your branch is up to date with 'user1/master'.

nothing to commit, working tree clean

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git add .

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git status
On branch master
Your branch is up to date with 'user1/master'.

nothing to commit, working tree clean

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git commit -m "add data"
On branch master
Your branch is up to date with 'user1/master'.

nothing to commit, working tree clean

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git push user1 master
Everything up-to-date

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$

# 4. Make a lot of Change

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git
$ ls
learn/

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git
$ cd learn

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (data)
$ git status
On branch data
nothing to commit, working tree clean

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (data)
$ ls
belajar.txt  coba1.txt  data1.txt  data5.txt
coba.txt     coba2.txt  data2.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (data)
$ git add .

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (data)
$ git commit -m "add data5.txt"
On branch data
nothing to commit, working tree clean

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (data)
$ git push user2 data
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 494 bytes | 247.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To https://github.com/HasymiMuhamad/learn-git.git
   83fefea..0bfa36d  data -> data

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (data)
$ ls
belajar.txt  coba1.txt  data1.txt  data5.txt
coba.txt     coba2.txt  data2.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (data)
$ git branch
  checkout
* data
  master

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (data)
$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'user2/master'.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ ls
belajar.txt  coba.txt  coba1.txt  coba2.txt  data1.txt  data2.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git remote rename user2 user

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git remote
user

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git remote -v
user    https://github.com/HasymiMuhamad/learn-git.git (fetch)
user    https://github.com/HasymiMuhamad/learn-git.git (push)

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git remote update
Fetching user

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git checkout master
Already on 'master'
Your branch is up to date with 'user/master'.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (master)
$ git checkout data
Switched to branch 'data'

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (data)
$ ls
belajar.txt  coba1.txt  data1.txt  data5.txt
coba.txt     coba2.txt  data2.txt  README.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (data)
$ git merge user/master
Already up to date.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (data)
$ git diff user/master
diff --git a/data5.txt b/data5.txt
new file mode 100644
index 0000000..e69de29

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (data)
$ git push user master
Everything up-to-date

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (data)
$ git checkout -b bob-changes
Switched to a new branch 'bob-changes'

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ git branch
* bob-changes
  checkout
  data
  master

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ git checkout bob-changes
Already on 'bob-changes'

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ touch bob.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ git add .

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ git commit -m "add bob.txt"
[bob-changes 01e2876] add bob.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 bob.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ git push user bob-changes
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 240 bytes | 240.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'bob-changes' on GitHub by visiting:
remote:      https://github.com/HasymiMuhamad/learn-git/pull/new/bob-changes
remote:
To https://github.com/HasymiMuhamad/learn-git.git
 * [new branch]      bob-changes -> bob-changes

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ ls
belajar.txt  coba.txt   coba2.txt  data2.txt  README.txt
bob.txt      coba1.txt  data1.txt  data5.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ git branch
* bob-changes
  checkout
  data
  master

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ git commit -am "updated README.txt"
On branch bob-changes
nothing to commit, working tree clean

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ git log git log --oneline
fatal: ambiguous argument 'git': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ git log
commit 01e2876873de4abf32c1023b45be3c8b1b4bbc76 (HEAD -> bob-changes, user/bob-changes)
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
commit 01e2876873de4abf32c1023b45be3c8b1b4bbc76 (HEAD -> bob-changes, user/bob-c
hanges)
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
Date:   Wed Oct 23 13:38:16 2019 +0700

    add bob.txt

commit 0bfa36d03155c57b70083c91fe67593536bb88fc (user/data, data)
Merge: 0d2fa11 83fefea
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
Date:   Wed Oct 23 13:30:34 2019 +0700

    Merge branch 'data' of https://github.com/HasymiMuhamad/learn-git into data

commit 0d2fa11baedc0d5c0e95fdb01f24857420e3af26
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
Date:   Wed Oct 23 13:29:52 2019 +0700

    add data5.txt

commit 83fefea8c4ee66018bd30debdc368d4630a9729c (user/master, master)
Author: HasymiMuhamad <hasymimuhamad@gmail.com>
Date:   Wed Oct 23 11:23:41 2019 +0700
No next tag  (press RETURN)
muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)

# 5. Clean Up Work Before Submit


muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git
$ ls
learn/

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git
$ cd learn

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ ls
belajar.txt  coba.txt   coba2.txt  data2.txt  README.txt
bob.txt      coba1.txt  data1.txt  data5.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ git log --oneline
01e2876 (HEAD -> bob-changes, user/bob-changes) add bob.txt
0bfa36d (user/data, data) Merge branch 'data' of https://github.com/HasymiMuhamad/learn-git into data
0d2fa11 add data5.txt
83fefea (user/master, master) add data1.txt data2.txt
dfa2940 (checkout) add coba1.txt and coba2.txt
534f61d add coba.txt
540b701 add belajar.txt
5ad7edd Add Readme.txt explanation
bc13a17 First commit.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ git rebase 534f61d
First, rewinding head to replay your work on top of it...
Applying: add coba1.txt and coba2.txt
Applying: add data5.txt
Applying: add data1.txt data2.txt
Applying: add bob.txt

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ pick 540b701
bash: pick: command not found

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ pick 540b701 add belajar.txt
bash: pick: command not found

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$ git log --oneline
bacf65c (HEAD -> bob-changes) add bob.txt
e3c0257 add data1.txt data2.txt
5687862 add data5.txt
ffee8ab add coba1.txt and coba2.txt
534f61d add coba.txt
540b701 add belajar.txt
5ad7edd Add Readme.txt explanation
bc13a17 First commit.

muhamad_hasymi@DESKTOP-FVMD1T0 MINGW64 /e/Praxis Test/praxis-academy-git/learn (bob-changes)
$





