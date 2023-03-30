import { run } from "./app/app";
import "./main.scss"
import { AlertService } from "./app/aler.service";
import { ComponentService } from "./app/component.service";

const alertService = new AlertService
const componentService = new ComponentService()

run(alertService, componentService)