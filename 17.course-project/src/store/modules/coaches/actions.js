export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.description,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    const response = await fetch(
      `https://vue-http-demo-4e199-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${context.rootGetters.token}`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );
    if (!response.ok) {
      // error
      return;
    }

    context.commit('registerCoach', { ...coachData, id: userId });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return
    }
    const response = await fetch(
      `https://vue-http-demo-4e199-default-rtdb.firebaseio.com/coaches.json?auth=${context.rootGetters.token}`
    );
    const responseData = await response.json()
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;  
    }

    const coaches = []
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp')
  },
};
