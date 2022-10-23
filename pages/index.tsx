import { useEffect, useState } from "react";
import User, { get, getRepos, Repo } from "@/lib/users/user";
import { Avatar, Image, Row, Col, Typography, Button } from "antd";
import "antd/dist/antd.css";

import { Anchor } from "antd";
const { Link } = Anchor;

const RONNY_CAJAS_GITHUB_USERNAME = "stealth14";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [user, setUser] = useState<null | User>(null);
  const [repos, setRepos] = useState<null | Repo[]>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { user } = await get(RONNY_CAJAS_GITHUB_USERNAME);
      setUser(user);
      const { repos } = await getRepos(RONNY_CAJAS_GITHUB_USERNAME);
      setRepos(repos);
    })();
  }, []);

  return (
    <>
      {user && (
        <div className={styles.container}>
          <div className={styles.content}>
            <Typography.Title level={1}>{user.name}</Typography.Title>
            <Typography.Paragraph style={{ color: "gray", fontSize: 25 }}>
              Github profile
            </Typography.Paragraph>
            <div className={styles["avatar-wrapper"]}>
              <Avatar
                onClick={() => {}}
                size={200}
                src={<Image alt="avatar" src={user.avatar_url} />}
              />
            </div>
            <div className={styles.description}>
              <Item label={"Nombre"} value={String(user.name)} />
              <Item
                label={"Repositorios públicos"}
                value={String(user.public_repos)}
              />
              <Item label={"Seguidores"} value={String(user.followers)} />
              <Button
                onClick={() => {
                  window.open(user.html_url, "_blank");
                }}
              >
                Ver en github
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const Item = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className={styles.item}>
      <span>{label}</span>
      <p>{value}</p>
    </div>
  );
};
