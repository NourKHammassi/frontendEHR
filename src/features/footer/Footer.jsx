// Footer.jsx
import * as React from "react";
import {
  Box,
  Stack,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  IconButton,
  Divider,
} from "@mui/material";
import { FaCcMastercard, FaCcVisa, FaCcAmex } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../auth/AuthSlice";
import { motion } from "framer-motion";

/* 🎨 Updated Bronze Palette */
const palette = {
  bronze: "#AD946B",
  beigeGold: "#ADA06B",
  terracotta: "#AD846B",
  text: "#1B1B1B",
  bgLight: "linear-gradient(180deg,#FBFAF7 0%,#F5F3EE 100%)",
  border: "rgba(27,27,27,0.08)",
};

const FooterWrap = styled(Box)(({ theme }) => ({
  background: palette.bgLight,
  color: palette.text,
  padding: "48px 28px 36px",
  borderTop: `3px solid ${palette.bronze}`,
  [theme.breakpoints.down("sm")]: {
    padding: "36px 20px",
  },
}));

const Title = styled(Typography)({
  fontSize: 15,
  fontWeight: 800,
  color: palette.text,
  marginBottom: 10,
  letterSpacing: 0.4,
});

const SmallText = styled(Typography)({
  fontSize: 13,
  color: "rgba(27,27,27,0.75)",
  cursor: "pointer",
  marginBottom: 4,
  transition: "all 0.25s ease",
  "&:hover": {
    color: palette.terracotta,
    transform: "translateX(2px)",
  },
});

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const loggedInUser = useSelector(selectLoggedInUser);

  const addr = "2 rue Perdonnet, 75010 Paris";
  const mail = "contact@ehr-batiment.fr";
  const phone = "01 84 00 00 00";

  return (
    <FooterWrap
      component={motion.footer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        {/* CONTACT */}
        <Grid item xs={12} md={5}>
          <Title>Discutons de votre projet</Title>
          <Typography
            sx={{
              mb: 1.5,
              color: "rgba(27,27,27,0.75)",
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            Un projet de rénovation, de construction ou d’aménagement ?
            Contactez-nous dès aujourd’hui pour bénéficier de l’expertise EHR.
            Devis gratuit sous 48h.
          </Typography>

          <Stack spacing={0.3} sx={{ mt: 1 }}>
            <SmallText>📍 EHR SARL — {addr}</SmallText>
            <SmallText>📧 {mail}</SmallText>
            <SmallText>📞 {phone}</SmallText>
          </Stack>
        </Grid>

        {/* QUICK LINKS */}
        <Grid item xs={12} sm={6} md={3}>
          <Title>Liens rapides</Title>
          <Stack spacing={0.3}>
            <SmallText onClick={() => navigate("/about")}>À propos</SmallText>
            <SmallText onClick={() => navigate("/services")}>Nos Métiers</SmallText>
            <SmallText onClick={() => navigate("/conditionsVentes")}>CGV</SmallText>
            <SmallText onClick={() => navigate("/conditionsUtilisation")}>
              CGU & Mentions
            </SmallText>
            <SmallText onClick={() => navigate("/demanderDevis")}>Contact</SmallText>
          </Stack>
        </Grid>

        {/* PAYMENTS */}
        <Grid item xs={12} sm={6} md={3}>
          <Title>Paiements sécurisés</Title>
          <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
            {[FaCcMastercard, FaCcVisa, FaCcAmex].map((Icon, idx) => (
              <IconButton
                key={idx}
                sx={{
                  bgcolor: "#fff",
                  width: 42,
                  height: 42,
                  borderRadius: 2,
                  boxShadow: "0 2px 8px rgba(27,27,27,0.08)",
                  border: `1px solid ${palette.border}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.08)",
                    boxShadow: `0 3px 12px ${palette.bronze}33`,
                  },
                }}
                aria-label="payment"
              >
                <Icon
                  size={18}
                  color={
                    idx === 0
                      ? "#EB001B"
                      : idx === 1
                        ? "#142787"
                        : "#016FD0"
                  }
                />
              </IconButton>
            ))}
          </Stack>

          <Divider
            sx={{
              width: "40%",
              borderColor: palette.border,
              my: 1,
            }}
          />

          <Typography
            sx={{
              mt: 1.5,
              fontSize: 12.5,
              color: "rgba(27,27,27,0.6)",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            © EHR {new Date().getFullYear()} — Tous droits réservés.
          </Typography>
        </Grid>
      </Grid>
    </FooterWrap>
  );
};
