# mcsim
The mcsim is a web application written using Blazor that simulates the behavior of microcontrollers for educational and research purposes.
It also allows for generation of state machine and timing diagrams.
It is currently a work in progress and thus buggy.

## Features
- Simulation of various microcontroller architectures, including AVR and ARM.
- Support for embedded C programming.
- Debugging features such as breakpoints, watchpoints, and step-by-step execution.
- Customizable input/output peripherals, including LEDs, switches, speakers, 7 segment display, and serial communication.
- Graphical user interface for easy simulation setup and control.
- Generation of timing diagrams to visualize inputs and outputs.
- Generation of state machine diagrams
- Converting state machine diagrams to C code.

# Requirements
The simulator requires the following software to be installed on your system:

- .NET 7.0
- Microsoft Visual Studio or a similar IDE for C# development

# Building and Running
To build and run the simulator, follow these steps:

1. Clone the repository to your local machine.
2. Open the solution file in Visual Studio or another IDE that supports .NET development.
3. Build the project using the IDE's build tools.
4. Run the simulator using the IDE's debugging tools.

# Usage
To use the simulator, follow these steps:

1. Launch the simulator by running `dotnet run`.
2. Load the microcontroller code and simulation configuration.
3. Configure the input/output peripherals as needed.
4. Start the simulation using the Run menu.
5. Use the debugging features to step through the code and observe the behavior of the microcontroller.

# Contributing
We welcome contributions from the community.
Before submitting a pull request, please make sure to run the tests and ensure that your changes do not introduce any regressions.

# License
The mcsim is released under the MIT License. See the [LICENSE](https://www.mit.edu/~amini/LICENSE.md) file for details.