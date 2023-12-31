function getTodayDay() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function getWeekDates() {
  const weekDates = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    weekDates.push(date.toISOString().slice(0, 10));
  }
  return weekDates;
}

class All {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  printTimePeriodFromLocal(data) {
    let selectedTasks = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].tasks.length > 0) {
        const tasks = data[i].tasks;
        for (let i = 0; i < tasks.length; i++) {
          selectedTasks.push(tasks[i]);
        }
      }
    }
    return selectedTasks;
  }
}

class Today {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  printTimePeriodFromLocal(data) {
    let selectedTasks = [];
    const today = getTodayDay();
    for (let i = 0; i < data.length; i++) {
      if (data[i].tasks.length > 0) {
        const tasks = data[i].tasks;
        for (let i = 0; i < tasks.length; i++) {
          const dateToCheck = tasks[i].date;
          if (today === dateToCheck) {
            selectedTasks.push(tasks[i]);
          }
        }
      }
    }
    return selectedTasks;
  }
}

class Week {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  printTimePeriodFromLocal(data) {
    let selectedTasks = [];
    const week = getWeekDates();
    for (let i = 0; i < data.length; i++) {
      if (data[i].tasks.length > 0) {
        const tasks = data[i].tasks;
        for (let i = 0; i < tasks.length; i++) {
          const dateToCheck = tasks[i].date;
          if (week.includes(dateToCheck)) {
            selectedTasks.push(tasks[i]);
          }
        }
      }
    }
    return selectedTasks;
  }
}

class Important {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  printTimePeriodFromLocal(data) {
    let selectedTasks = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].tasks.length > 0) {
        const tasks = data[i].tasks;
        for (let i = 0; i < tasks.length; i++) {
          const important = tasks[i].important;
          if (important) {
            selectedTasks.push(tasks[i]);
          }
        }
      }
    }
    return selectedTasks;
  }
}

class Favourite {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  printTimePeriodFromLocal(data) {
    let selectedTasks = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].tasks.length > 0) {
        const tasks = data[i].tasks;
        for (let i = 0; i < tasks.length; i++) {
          const favourite = tasks[i].favourite;
          if (favourite) {
            selectedTasks.push(tasks[i]);
          }
        }
      }
    }
    return selectedTasks;
  }
}

class Completed {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  printTimePeriodFromLocal(data) {
    let selectedTasks = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].tasks.length > 0) {
        const tasks = data[i].tasks;
        for (let i = 0; i < tasks.length; i++) {
          const completed = tasks[i].completed;
          if (completed) {
            selectedTasks.push(tasks[i]);
          }
        }
      }
    }
    return selectedTasks;
  }
}

export { All, Today, Week, Important, Favourite, Completed };
