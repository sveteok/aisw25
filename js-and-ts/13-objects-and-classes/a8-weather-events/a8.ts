abstract class WeatherEvent {
  constructor(public timestamp: Date) {}
  abstract getInformation(): string;
  print(): void {
    // const format = (n: number) => String(n).padStart(2, "0");
    // const time = `${this.timestamp.getFullYear()}-${format(
    //   this.timestamp.getMonth() + 1
    // )}-${format(this.timestamp.getDay())} ${format(
    //   this.timestamp.getHours()
    // )}:${format(this.timestamp.getMinutes())}`;
    const formatter = new Intl.DateTimeFormat("fi-FI", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "UTC",
    });

    const time = formatter.format(this.timestamp);
    console.log(`${time} ${this.getInformation()}`);
  }
}

class TemperatureChangeEvent extends WeatherEvent {
  constructor(public timestamp: Date, public temperature: number) {
    super(timestamp);
  }

  override getInformation(): string {
    return `temperature: ${this.temperature}°C`;
  }
}

class HumidityChangeEvent extends WeatherEvent {
  constructor(public timestamp: Date, public humidity: number) {
    super(timestamp);
  }

  override getInformation(): string {
    return `humidity: ${this.humidity}%`;
  }
}

class WindStrengthChangeEvent extends WeatherEvent {
  constructor(public timestamp: Date, public wind: number) {
    super(timestamp);
  }

  override getInformation(): string {
    return `wind strength: ${this.wind}m/s`;
  }
}

const weatherEvents: WeatherEvent[] = [];

weatherEvents.push(new TemperatureChangeEvent(new Date(), -6.4));
weatherEvents.push(new HumidityChangeEvent(new Date(), 95));
weatherEvents.push(new WindStrengthChangeEvent(new Date(), 2.2));

weatherEvents.forEach((weatherEvent) => weatherEvent.print());

/*
2022-11-29 03:00 temperature: -6.4°C
2022-11-29 04:00 humidity: 95%
2022-11-30 13:00 wind strength: 2.2m/s

Extra:
2025-09-06 12:49 temperature: -6.4°C
2025-09-06 12:49 humidity: 95%
2025-09-06 12:49 wind strength: 2.2m/s

With Intl.DateTimeFormat:
20.09.2025 klo 12.54 temperature: -6.4°C
20.09.2025 klo 12.54 humidity: 95%
20.09.2025 klo 12.54 wind strength: 2.2m/s

*/
