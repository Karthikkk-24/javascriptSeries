// Command Pattern

class LightBulb {
    turnOn() {
        console.log('Light is on'); // Light is on
    }

    turnOff() {
        console.log('Light is off'); // Light is off
    }
}

class Command {
    execute() {
        throw new Error('Method not implemented.');
    }
}

class TurnOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }
}

class TurnOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }
}

class RemoteControl {
    pressButton(command) {
        command.execute();
    }
}

const light = new LightBulb();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

const remote = new RemoteControl();

remote.pressButton(turnOnCommand);
remote.pressButton(turnOffCommand);
