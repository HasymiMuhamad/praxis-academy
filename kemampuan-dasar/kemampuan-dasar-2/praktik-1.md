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

