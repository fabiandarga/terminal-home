import TerminalHome from './cli/home';

const terminal = new TerminalHome(process.env.USER || 'Nobody');
terminal.printWelcomeMessage();
