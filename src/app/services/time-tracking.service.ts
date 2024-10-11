import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackingService {
  years: number = 0;
  months: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const startDate = new Date('2024-04-28T01:00:00');
    const currentDate = new Date();

    // Diferença total em milissegundos
    let totalMilliseconds = currentDate.getTime() - startDate.getTime();

    // Cálculo de anos
    const startYear = startDate.getFullYear();
    const currentYear = currentDate.getFullYear();
    this.years = currentYear - startYear;

    // Ajusta meses
    const startMonth = startDate.getMonth();
    const currentMonth = currentDate.getMonth();
    this.months = currentMonth - startMonth;
    if (this.months < 0) {
      this.years--;
      this.months += 12;
    }

    // Ajusta dias
    const startDay = startDate.getDate();
    const currentDay = currentDate.getDate();
    if (currentDay < startDay) {
      const previousMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      const daysInPreviousMonth = previousMonthDate.getDate();
      this.days = daysInPreviousMonth - startDay + currentDay;
      this.months--;
      if (this.months < 0) {
        this.years--;
        this.months += 12;
      }
    } else {
      this.days = currentDay - startDay;
    }

    // Cálculo das horas, minutos e segundos restantes
    const secondsInADay = 1000 * 60 * 60 * 24;
    totalMilliseconds %= secondsInADay;

    this.hours = Math.floor(totalMilliseconds / (1000 * 60 * 60));
    totalMilliseconds %= 1000 * 60 * 60;

    this.minutes = Math.floor(totalMilliseconds / (1000 * 60));
    totalMilliseconds %= 1000 * 60;

    this.seconds = Math.floor(totalMilliseconds / 1000);
  }
}
