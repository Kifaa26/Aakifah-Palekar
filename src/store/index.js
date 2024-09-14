import 'vue3-toastify/dist/index.css'

import axios from 'axios'
import { createStore } from 'vuex'
import { toast } from 'vue3-toastify'

const portfolioURL = 'https://kifaa26.github.io/Info/data/'

export default createStore({
  state: {
    home: null,
    aboutMe: null,
    education: null,
    experience: null,
    projects: null,
    softSkills: null  // Added softSkills state
  },
  getters: {},
  mutations: {
    setHome(state, value) {
      state.home = value;
    },
    setAboutMe(state, value) {
      state.aboutMe = value;
    },
    setEducation(state, value) {
      state.education = value;
    },
    setExperience(state, value) {
      state.experience = value;
    },
    setProjects(state, value) {
      state.projects = value;
    },
    setSoftSkills(state, value) {  // Added mutation for softSkills
      state.softSkills = value;
    }
  },
  actions: {
    async getHome(context) {
      try {
        let { home } = (await axios.get(portfolioURL)).data;
        context.commit('setHome', home);
        console.log(home);
      } catch (e) {
        toast.error('Failed to fetch home data', {
          position: 'top-right',
          autoClose: 2000
        });
      }
    },
    async getAboutMe(context) {
      try {
        let { aboutMe } = (await axios.get(portfolioURL)).data;
        context.commit('setAboutMe', aboutMe);
      } catch (e) {
        toast.error('Failed to fetch about me data', {
          position: 'top-right',
          autoClose: 2000
        });
      }
    },
    async getEducation(context) {
      try {
        let { education } = (await axios.get(portfolioURL)).data;
        context.commit('setEducation', education);
        console.log(education);
      } catch (e) {
        toast.error('Failed to fetch education data', {
          position: 'top-right',
          autoClose: 2000
        });
      }
    },
    async getExperience(context) {
      try {
        let { experience } = (await axios.get(portfolioURL)).data;
        context.commit('setExperience', experience);
        console.log(experience);
      } catch (e) {
        toast.error('Failed to fetch experience data', {
          position: 'top-right',
          autoClose: 2000
        });
      }
    },
    async getSoftSkills(context) {
      try {
        let { softSkills } = (await axios.get(portfolioURL)).data;
        context.commit('setSoftSkills', softSkills);  // Committing to the correct mutation
      } catch (e) {
        toast.error('Failed to fetch soft skills data', {
          position: 'top-right',
          autoClose: 2000
        });
      }
    },
    async getProjects(context) {
      try {
        let { projects } = (await axios.get(portfolioURL)).data;
        context.commit('setProjects', projects);
      } catch (e) {
        toast.error('Failed to fetch projects data', {
          position: 'top-right',
          autoClose: 2000
        });
      }
    }
  },
  modules: {}
});
