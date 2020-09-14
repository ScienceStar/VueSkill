import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import welcome from '@/components/welcome'
import knowledge from '@/components/knowledge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/welcome12',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: knowledge
    }
  ]
})
//docker run --name jenkins -d -p 80:8080 -p 50000:50000 -v /docker_data/jenkins_data/:/var/jenkins_home -u root myjenk
//sed -i 's/http:\/\/updates.jenkins-ci.org\/download/https:\/\/mirrors.tuna.tsinghua.edu.cn\/jenkins/g' /var/jenkins_home/updates/default.json
//sed -i 's/http:\/\/www.google.com/https:\/\/www.baidu.com/g' /var/jenkins_home/updates/default.json
//1a69cf0fcd18984169bd1bcc1b05c8b322fb1083 341d71513k.wicp.vip:34249 341d71513k.wicp.vip:57352




