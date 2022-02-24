import React, { useState, useRef, useEffect, useCallback } from "react";

import { Button, Spinner, Table } from "react-bootstrap";
import { parseDate } from "../helpers/ParseDate";

const EventsPage = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("");
  const [events, setEvents] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      ws.current = new WebSocket("wss://test.relabs.ru/event");
      ws.current.onopen = () => setStatus("Соединение открыто");
      ws.current.onclose = () => setStatus("Соединение закрыто");

      gettingData();
    }
    return () => ws.current.close();
  }, [ws, isPaused]);

  const gettingData = useCallback(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      if (isPaused) return;
      const message = JSON.parse(e.data);
      setData(message);
    };
  }, [isPaused]);
  useEffect(() => {
    if (!!data) {
      setEvents([...events, data]);
    }
  }, [data]);
  return events.length > 0 ? (
    <>
      <h2>События</h2>
      <div className="websocket-events">
        <h5>Статус : {status}</h5>
        <Button
          onClick={() => {
            ws.current.close();
            setIsPaused(!isPaused);
          }}
          variant={isPaused ? "success" : "danger"}
        >
          {!isPaused ? "Остановить соединение" : "Открыть соединение"}
        </Button>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Дата</th>
            <th>События</th>
          </tr>
        </thead>
        <tbody>
          {events.map((item, i) => (
            <tr key={item.ctime + item.ctime}>
              <td>{parseDate(item.ctime)}</td>
              <td>{item.event}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  ) : (
    <Spinner className="spinner" animation="border" variant="primary" />
  );
};

export default EventsPage;
