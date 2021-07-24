import axios from "axios";

const http = axios.create({
    baseURL: "https://uxcandy.com/~shapoval/test-task-backend/v2"
});
const developer = "nursultan";

export default new (class TaskDataService {
    getAll(params) {
        if (!(params && typeof params == "object")) {
            params = {};
        }
        let config = {
            params: Object.assign({developer: developer}, params)
        };
        return http.get("/", config);
    }

    create(data) {
        let config = {
            params: {
                developer: developer
            },
            headers: {
                "Content-type": "multipart/form-data"
            }
        };
        return http.post("/create", data, config);
    }

    login(data) {
        let config = {
            params: {
                developer: developer
            },
            headers: {
                "Content-type": "multipart/form-data"
            }
        };
        return http.post("/login", data, config);
    }

    update(id, data) {
        let config = {
            params: {
                developer: developer
            },
            headers: {
                "Content-type": "multipart/form-data"
            }
        };
        return http.post(`/edit/${id}`, data, config);
    }
})();

// developerName && "/" && headers (headers: {"Content-type": "multipart/form-data"}) && body||param