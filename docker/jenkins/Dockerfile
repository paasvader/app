FROM centos:centos7
RUN rm -f /etc/localtime && ln -fs /usr/share/zoneinfo/Asia/Tokyo /etc/localtime
RUN yum install -y http://ftp-srv2.kddilabs.jp/Linux/distributions/fedora/epel/6/x86_64/epel-release-6-8.noarch.rpm && \
    yum update -y && \
    yum install -y git && \
    yum clean all

RUN curl -L -C - -b "oraclelicense=accept-securebackup-cookie" -O http://download.oracle.com/otn-pub/java/jdk/8u25-b17/jdk-8u25-linux-x64.rpm && \
yum install -y ./*.rpm && \
rm *.rpm

EXPOSE 8080
EXPOSE 8009

ENV JENKINS_HOME /jenkins
VOLUME /jenkins

RUN curl -L -O http://mirrors.jenkins-ci.org/war/latest/jenkins.war

CMD ["java", "-jar", "/jenkins.war", "--httpPort=8080", "--ajp13Port=8009"]
